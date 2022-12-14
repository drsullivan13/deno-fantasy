import axiod from "https://deno.land/x/axiod/mod.ts";

const baseUrl = 'https://fantasy.espn.com/apis/v3/games/ffl/seasons'
const leagueId = '248873'
const cookie = 'espn_s2=AEB6eYtlqIgLDkLzrwf4LAS7KQwaliUFhzuOgsTduWE01%2FhOEbOKQFyeH%2F6gelPrp6Oxkxv00Cw1F1Us13PqoDaHJa4sPl8cLumbND2Kaitv%2BMYpZCYvk4eg53IzA5D8yi%2BbD%2Fk3a%2B8ARmGrOAkDqG71m75xzLzqhm4rvxeUdMftUAh2tTfBtfgTlAq3Uwcrf7yDlzaWyocJa5X4xrYoExKcxcZc%2BvuFI%2F3kROX2BRxjh30EP9QzjtUsaiufdXVY5Qqzqy96c8RPOR6hh5wSe5Ce%2FJXNufBg47j4ml8WizHMo73HIb4Vl%2BKQYIrK4yyE3PQ%3D; SWID={A393ED4A-3AB9-47FF-8EDB-747983FB025A};'

export const getTeamInformation = () => {
    return axiod.get(`${baseUrl}/${2022}/segments/0/leagues/${leagueId}?scoringPeriodId=1&view=mRoster&view=mTeam`, 
    {withCredentials: true, headers: { cookie }}).then((res) => {
        console.log(`RESPONSE: ${JSON.stringify(res)}`)
        return res.data.teams
    })
}