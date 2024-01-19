# Webpack Module Federation Examples

## Project Setup

1. Start local npm proxy server
2. Start Consumer Application
3. Start Remove application

Run each commands block below in a new terminal

### 1. Start local npm proxy server
```bash
yarn workspace npm start
```

```bash
yarn
```

## Case Studies

### 1. Module federation dependency sharing and resolution

Without explicit version (a.k.a. `requiredVersion`)

```bash
yarn workspace remote start:unversioned
```

With explicit version (a.k.a. `requiredVersion`)

```bash
yarn workspace remote start:versioned
```

#### Observation

