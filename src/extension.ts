import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.promptDeepseek', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor.');
      return;
    }

    const doc = editor.document;
    const fileName = doc.fileName;
    const fileContent = doc.getText();

    const userPrompt = await vscode.window.showInputBox({
      prompt: 'Enter your prompt for Deepseek:',
      placeHolder: 'e.g., Help me fix this code'
    });

    if (!userPrompt) {
      return;
    }

    const ollamaPrompt = `I am editing the file ${fileName}, which has content:

\`\`\`
${fileContent}
\`\`\`

Please do the following: ${userPrompt}`;

    const outputChannel = vscode.window.createOutputChannel('Deepseek Response');
    outputChannel.show(true);

    try {
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'deepseek-r1:1.5B',
        prompt: ollamaPrompt,
        stream: false
      });

      outputChannel.clear();
      outputChannel.appendLine(response.data.response);
    } catch (error) {
      outputChannel.clear();
      outputChannel.appendLine('Error occurred:');
      if (axios.isAxiosError(error)) {
        outputChannel.appendLine(error.response?.data?.error || error.message);
      } else if (error instanceof Error) {
        outputChannel.appendLine(error.message);
      }
      vscode.window.showErrorMessage('Failed to get response from Ollama. Check output panel for details.');
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}