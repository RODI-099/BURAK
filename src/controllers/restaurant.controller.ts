import { Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import {  LoginInput, Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();
const restaurantController: T = {}; 
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome")
        res.render("Home");
    } catch (err) {
        console.log("Error, on Home Page:", err)
    }
    
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.render("Signup");
    } catch (err) {
        console.log("Error, on Signup Page:", err)
    }

};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin")
        res.render("Login");
    } catch (err) {
        console.log("Error, on Login Page:", err)
    }

};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup")
        

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // TODO; Session Authentication

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup", err)
        res.send(err);
    }

};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin")
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
        // Session Authentication
        res.send(result);
    } catch (err) {
        console.log("Error, processLogin", err)
        res.send(err);
    }

};




export default restaurantController;