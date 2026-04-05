import User from "../model/user.model.js";

const Loginpage = async (req, res) => {

}


const Registerpage = async (req, res) => {

}


const Dashboardpage = async (req, res) => {
    try {
        req.json({response:true, message:"dashboardpage"})
    } catch (error) {
        console.log(error.message);
    }
}

export {Loginpage, Registerpage, Dashboardpage}