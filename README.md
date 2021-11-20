

# Trana

This project was generated using [Nx](https://nx.dev). Nx is a set of extensible dev tools for monorepos.

## Problem Statement

https://teamtrana.notion.site/Frontend-coding-task-5f200ad0aae24aa0828183ab1563e6e1

Live demo: https://trana-assessment.vercel.app/

### Technologies to use

- Typescript
- Node
- React

### Requirements

- ✅ Nextjs application to test the components.
- ✅ Shared UI Librairy.
- ✅ Storybook to visualize the components.

## Repository structure

```
.
└── root
    ├── apps                     
    │   └── trana                      <-- nextjs app
    └── libs
        └── ui                         <-- ui shared librairy (dir)
            ├── .storybook             <-- storybook configuration folder (dir)
            └── src
                └── lib                <-- react component lib
                    ├── accordion      <-- accordion component
                    ├── box            <-- box component
                    ├── flex           <-- flex component
                    ├── container      <-- container component
                    ├── course-tree    <-- course-tree component
                    └── sidebar        <-- sidebar component
```



## Development server

Run `npm install` to install the project dependencies.

Run `npm run start trana` for next dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `npm run start ui:storybook` for storybook server. Navigate to http://localhost:4400/. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build trana` to build the nextjs frontend. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `npm run build ui` to build the ui shared librairy. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.