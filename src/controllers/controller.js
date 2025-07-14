/*
 * Title: User controller
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 14-0702025
 */
//Dependencies
//Core Dependencies
//const  =require();

//External Dependencies
//const  =require();

//Local Dependencies
//const  =require();

export const getRequest = async (req, res) => {
  res.status(200).send("“I am get request.”");
};
export const postRequest = async (req, res) => {
  res.status(200).send("“I am post request.”");
};

export const notFoundRequest = async (req, res) => {
  res.status(400).send("Opps! 404 page not found");
};

