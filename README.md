# rsbuild-microfrontends

## The Concept: Bidirectional Module Federation with rsbuild

This repository demonstrates a flexible approach to module federation, moving beyond the traditional "provider-consumer" pattern. Utilizing rsbuild, we showcase how applications can share codebase components fluidly, allowing for back-and-forth imports without strict hierarchical definitions. This eliminates the need to designate "mother" or "child" applications, fostering a more dynamic and interconnected architecture.

The core principle centers on `app-1` serving as the primary application. However, `app-2` can consume modules exposed by `app-1`, and vice-versa. This design significantly reduces code duplication and streamlines development workflows.

## Setup and Usage

### Development Environment

To initiate the development environment, concurrent processes are required for both applications:

1. Open two separate terminal windows
2. Navigate to the `app-1` directory in one terminal and `app-2` in the other
3. Execute the following command in both terminals:

```bash
pnpm dev

# app-1: starts dev server, main entry point
# app-2: spawns dev server, primarily generates 'dist' for module onsumption by app-1
```

### Production Build

For building the applications for production, `app-1` automates the entire process. From the root of `app-1`, execute:

```bash
pnpm build
```

This command will concurrently build both: `app-1` and `app-2`, populating their respective dist directories with the necessary modules for inter-application communication.

## Architectural Advantages
- **Reduced Duplication**: Code shared between applications is managed centrally, eliminating redundant implementations.
- **Streamlined Development**: A flexible sharing model contributes to faster development cycles and simplified maintenance.
- **Decentralized Modularity**: The architecture supports a peer-to-peer module exchange, enhancing code reusability and adaptability across the application landscape.