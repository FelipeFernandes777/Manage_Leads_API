import app from './src/app'
import os from 'os';

const PORT = process.env.PORT || 3000;
const myIp = os.networkInterfaces();

app.listen(PORT, () => {
    console.log("Server running in: " + myIp.enp63s0[0].address + ":"+ PORT);
});