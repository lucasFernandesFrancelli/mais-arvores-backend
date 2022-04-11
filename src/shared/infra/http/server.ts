import { app } from './app';
import api from '../../../config/api';

const apiConfig = api();

app.listen(apiConfig.PORT || 4000, async () => {
  console.log(`Server is running on port ${apiConfig.PORT}`);
});
