type Player = {
    number: number
    name: string
    position: string
    caps: number
    goals: number
    club: string
}

type Team = {
    name: string;
    code: string;
    flag: string;
    players: Player[];
}

type Group = {
    name: string;
    teams: Team[];
}

type Round = {
    name: string;
    matches: Match[]
}

type Score = {
    ft: string
    ht: string
}

type Goals = {
    name: string
    minute: number
    offset?: number
    penalty?: boolean
    owngoal?: boolean
}

type Match = {
    num: number
    date: string
    time: string
    home: Team
    away: Team
    score: Score
    goalsHome: Goals[];
    goalsAway: Goals[];
    group: Group;
    round: Round;
    arena: Arena;
}

type ArenaLocation = {
    lat: number
    lng: number
}

type Arena = {
    name: string
    city: string
    country: string
    capacity: number
    location: ArenaLocation
}