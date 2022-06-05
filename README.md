# Node data

## The Task

### Assignement

The task is to create an app that uses the provided data about football competitions. User can select a competition from a list, then a page with a list of matches is shown. Also a list of teams in the competition is shown. User is able to see players belonging to a team. 

Use the data anyway you want to create an API that will provide this data to frontend.
### Data

Data to use for this assignement is in data folder. It has 2 subfolders: competitions and teams
competitions have subresources /matches and /teams with data corresponding to each competition from competitions.json which contains 4 european competitions.
and /data/teams contains details about each team in dataset

```bash
├── /data
   ├── /competitions
   │   ├── /teams
   │   │   └──{competitionId}.json
   │   ├── /matches
   │   │   └──{competitionId}.json
   │   └── competitions.json
   └── /teams
       └── {teamId}.json
```
