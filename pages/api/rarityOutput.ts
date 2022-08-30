import { NextApiRequest,NextApiResponse } from "next"
import executeQuery from '../../lib/db'

import mysql from 'mysql';


export default async function rarityOutput(req: NextApiRequest, res: NextApiResponse) {

    //whats the difference between req: res: without Next imports
try {

    let request = JSON.parse(req?.body);
  
    let sql = 'SELECT `rank` FROM `doodles` WHERE `tokenId` = ' + request.tokenId;

 
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rarities'
    });
    
    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });
    connection.query(sql, (err, rows) => {

       
        res.status(200).json(rows);

        //return rows;
 
  });

   
} catch ( error ){



}
        


    
    
    }
  