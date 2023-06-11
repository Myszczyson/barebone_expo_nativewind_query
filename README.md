# Next.js Tailwind Starter with Query

This is a minimal Expo starter project with Nativewind and query set up, so you can easily get started with your own custom project. The setup is simple and straightforward, allowing you to focus on building your application the way you like.

## Features

- Expo for building and managing the project
- Nativewind for styling of Tailwind CSS brought to React Native
- Basic query setup for fetching data

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

#### `https://github.com/Myszczyson/barebone_expo_nativewind_query.git`

2. Change to the project directory:

#### `cd barebone_expo_nativewind_query`

3. Install dependencies:

#### `npm install`

4. Set up precommit command

#### `npx simple-git-hooks`

5. Start the development server:

#### `npm run android` or `npm run ios`

6. Open the project and start building

## Customizing the Project

Now that you have the project set up, you can start customizing it to suit your needs.

To add new pages, simply create a new `.jsx` or `.tsx` file inside the `src/app` directory.

For fetching data, React Query is set up as a provider, allowing you to use your preferred method of implementation.

## Linting

This project uses the Rome linter to lint JavaScript and TypeScript files. Please note that Rome currently does not support linting HTML, Markdown, or CSS files.

To lint the project, run the following command:

#### `npm run lint`

By default, the lint command only checks the `src` folder. If you want to lint additional folders, simply update the command in the `scripts` section of your `package.json` file.

## Git Hooks and GitHub Workflow

This project includes a GitHub workflow for type checking and linting on push events. Additionally, you can use `simple-git-hooks` to set up a pre-commit hook that runs type checking and linting before committing your changes. For more information on setting up `simple-git-hooks`, refer to [this guide](https://github.com/toplenboren/simple-git-hooks).

## Deployment

To deploy an Expo app using Expo Application Services (EAS), refer to the official Expo documentation on building and deploying your app with EAS.

## License

This project is released under the MIT License.
