
```markdown
# Telegram Clone

This project is a pixel-perfect replica of the Telegram messaging application, developed using ReactJS. The application includes both desktop and mobile views and utilizes two API endpoints to display chats and their messages.

## Features

- Pixel-perfect UI for both desktop and mobile views
- Responsive design that adapts to different screen sizes
- Dark mode toggle
- Sidebar with navigation options
- Chat list with the last message preview
- Chat window displaying messages
- Search bar in the navigation bar

## API Endpoints

- **Get all chats (paginated)**
  - URL: `https://devapi.beyondchats.com/api/get_all_chats?page=1`
  - Type: GET Request

- **Get chat messages by chat ID**
  - URL: `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
  - Type: GET Request

## Project Structure

```
src/
│
├── components/
│   ├── ChatList.jsx
│   ├── ChatWindow.jsx
│   ├── NavBar.jsx
│   └── Sidebar.jsx
│
├── context/
│   └── DarkModeContext.jsx
│
├── styles/
│   ├── App.css
│   ├── ChatWindow.css
│   ├── ChatList.css
│   ├── NavBar.css
│   └── Sidebar.css
│
├── App.jsx
└── Sidebar.css main.jsx

```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telegram-clone.git
   cd telegram-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### NavBar Component

- Contains the search bar and menu icon.
- Toggles the sidebar on smaller screens.

### Sidebar Component

- Displays profile information and navigation options.
- Includes a dark mode toggle button.

### ChatList Component

- Displays a list of chats with the last message preview.
- Fetches chats from the API and updates state.

### ChatWindow Component

- Displays messages of the selected chat.
- Fetches messages from the API based on the selected chat ID.
- Includes a back button for mobile view to return to the chat list.

## Dark Mode

The application supports dark mode, which can be toggled using the button in the sidebar. The dark mode preference is saved in local storage and persists across sessions.

## Deployment

To deploy the project, you can use services like Vercel, Netlify, or GitHub Pages. Ensure that you build the project before deployment:

```bash
npm run build
```

Then, follow the deployment instructions of your chosen platform.

## Credits

- [Telegram](https://telegram.org/) for the UI/UX inspiration.
- [BeyondChats API](https://devapi.beyondchats.com) for providing the chat and message data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` covers all the essential aspects, including installation, usage, features, and deployment instructions. You can adjust the repository URL and license details as per your project's specifics.