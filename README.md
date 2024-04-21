## Installation

### Game

1. Change to the game directory

   ```bash
   cd game
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Build game

   ```bash
   npm run build
   ```

4. Start fame
   ```bash
   npm run start
   ```

### ADHD Predictor

1. Change to the predictor directory

   ```bash
   cd adhd-predictor
   ```

2. Build Docker Image

   ```bash
   docker build --tag "adhd-detection" .
   ```

3. Run docker image

   ```bash
   docker run -p 9030:9030 adhd-detection

   ```

### Frontend

1. Change to the frontend directory

   ```bash
   cd frontend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Build frontend

   ```bash
   npm run build
   ```

4. Start frontend
   ```bash
   npm run start
   ```
5. The project will be running at http://localhost:3000/.
