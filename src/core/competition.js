const controller = require('../core/controller');
const data = require('../../data/competitions/competitions.json')
const _ =require('lodash')


class Competition extends controller {

    async getCompetitionList(req,res){
        try {
            res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(this.errorMsgFormat({
                'message': error.message
            }, 'users', 400));
        }
    }
    
    async getMatchesAndTeams(req,res,type){
        try {
            let id = req.params.id
            let matches=require(`../../data/competitions/${type}/${id}.json`)
            res.status(200).send(matches)
        } catch (error) {
            return res.status(400).send(this.errorMsgFormat({
                'message': error.message
            }, 'users', 400));
        }
    }
    async getTeamMembers(req,res){
        try {
            let playerList=[]
            let id = req.params.id
            let matches=require(`../../data/teams/${id}.json`)
            if(matches.squad){
                _.each(matches.squad,(ele)=>{
                    if(ele.role=="PLAYER"){
                        playerList.push({
                        "id": 2294,
                        "name": ele.name,
                        "position": ele.position,
                        "dateOfBirth": ele.dateOfBirth,
                        "countryOfBirth": ele.countryOfBirth,
                        "nationality": ele.nationality,
                        })

                    }
                })
            }
            res.status(200).send(playerList)
        } catch (error) {
            return res.status(400).send(this.errorMsgFormat({
                'message': error.message
            }, 'users', 400));
        }
    }
}
module.exports = new Competition