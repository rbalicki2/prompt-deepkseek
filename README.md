# Prompt DeepSeek - Local AI-Powered Code Assistant

Welcome to **Prompt DeepSeek**, a locally-run AI-powered code assistant that integrates seamlessly with Visual Studio Code. This project was entirely **one-shotted by DeepSeek**, showcasing the power of AI in creating functional and efficient tools. Even this README was written by DeepSeek—because why not? 😎

The extension allows you to use **DeepSeek-V3** locally via **Ollama**, ensuring your data stays private and offline. It includes the current file as part of the prompt, making it a powerful tool for code generation and assistance.

---

## Features
- **Local Execution**: Runs entirely on your machine—no data is sent to the cloud.
- **VS Code Integration**: Easily accessible via the command palette.
- **AI-Powered**: Leverages the **DeepSeek-V3** model for intelligent code suggestions.
- **Offline Support**: Works without an internet connection, ensuring privacy and reliability.

---

## Installation Instructions

### Step 1: Install Ollama
1. Open your terminal and install Ollama using Homebrew:
   ```bash
   brew install ollama
   ```
2. Start the Ollama server:
   ```bash
   ollama serve
   ```

### Step 2: Pull the DeepSeek Model
1. In a new terminal window, pull the **DeepSeek-V3** model:
   ```bash
   ollama pull deepseek-r1:1.5b
   ```

### Step 3: Clone the Repository
1. Clone the `prompt-deepseek` repository to your local machine:
   ```bash
   git clone git@github.com:rbalicki2/prompt-deepseek.git
   ```

### Step 4: Install the VS Code Extension
1. Open Visual Studio Code.
2. Press `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows/Linux) to open the Extensions panel.
3. Click the three dots (`...`) in the top-right corner of the panel and select **"Install from VSIX..."**.
4. Navigate to the root of the `prompt-deepseek` directory and select the `.vsix` file to install the extension.

### Step 5: Use the Extension
1. Once installed, open the command palette in VS Code by pressing `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux).
2. Search for and select the **"Prompt DeepSeek"** command to start using the AI-powered code assistant.

---

## How It Works
This extension integrates with the locally running **Ollama** server and the **DeepSeek-V3** model. It uses the content of your current file as part of the prompt, providing context-aware suggestions and completions. Since everything runs locally, you can be confident that your data is secure and private.

---

## Proudly One-Shotted by DeepSeek
Yes, you read that right—this entire project, including the VS Code extension, was **one-shotted by DeepSeek**. The only hiccup was a missing `tsconfig`, which was due to an incomplete prompt (oops! Blame the human in this loop.).

---

## Privacy Assurance
- **No Data Leaves Your Machine**: Everything runs locally, and no data is sent to DeepSeek's cloud or any external servers.
- **Offline Capability**: The extension works without an internet connection, ensuring complete privacy.

---

## Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Let's make this tool even better together!

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy your local AI-powered coding experience! 🚀