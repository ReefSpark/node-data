const expres = require('express')
const router = expres.Router()
const Controller = require('../core/controller');
const controller = new Controller;
const competition = require('../core/competition')

router.get('/',async (req,res)=>{
    try {
        return competition.getCompetitionList(req, res);
    } catch (err) {
        return res.status(500).send(controller.errorMsgFormat({
            'message': err.message
        }, 'users', 500));
    }
})

router.get('/matches/:id',async (req,res)=>{
    try {
        return competition.getMatchesAndTeams(req, res,'matches');
    } catch (err) {
        return res.status(500).send(controller.errorMsgFormat({
            'message': err.message
        }, 'users', 500));
    }
})

router.get('/teams/:id',async (req,res)=>{
    try {
        return competition.getMatchesAndTeams(req, res,'teams');
    } catch (err) {
        return res.status(500).send(controller.errorMsgFormat({
            'message': err.message
        }, 'users', 500));
    }
})


router.get('/team/member/:id',async (req,res)=>{
    try {
        return competition.getTeamMembers(req, res);
    } catch (err) {
        return res.status(500).send(controller.errorMsgFormat({
            'message': err.message
        }, 'users', 500));
    }
})


module.exports=router;