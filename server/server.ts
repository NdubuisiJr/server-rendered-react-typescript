import express, { Application, NextFunction, Request, Response  } from 'express';
import path from 'path';
import { readFile } from 'fs';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../client/App';

const server: Application = express(); 

server.get('/', async (req:Request, res:Response, next:NextFunction) => {
    const html = await GetBaseHtml();
    const data = html.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(createElement(App))}</div>`
    );
    res.send(data);
});
server.use(express.static('build')); 


const GetBaseHtml = (): Promise<string> => {
    return new Promise((resolve, reject)=>{     
        const htmlPath: string = path.join(process.cwd(),'build','index.html');
        readFile(htmlPath, 'utf-8', (err, data:string) =>{
            if(err){   
                 return reject(err);
            }
            return resolve(data);
        });
    })
}

server.listen(8080, ()=>{
    console.log(`Listening on port ${8080} on ${'development'} mode`);
});