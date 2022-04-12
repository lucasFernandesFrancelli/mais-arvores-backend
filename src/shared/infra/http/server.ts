import { app } from './app';
import api from '../../../config/api';

const apiConfig = api();

app.listen(apiConfig.PORT, async () => {
  console.log(`Server is running on port ${apiConfig.PORT}`);
});
