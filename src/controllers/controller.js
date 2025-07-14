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

exports.getRequest = async (req, res) => {
  return res.status(200).send("“I am get request.”");
};
exports.postRequest = async (req, res) => {
  return res.status(200).send("“I am post request.”");
};

exports.notFoundRequest = async (req, res) => {
  return res.status(400).send("Opps! 404 page not found");
};
