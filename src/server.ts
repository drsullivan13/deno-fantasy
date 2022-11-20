import { Application, helpers, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import pkg from "https://esm.sh/espn-fantasy-football-api/node";
import { getTeamInformation } from "./espnClient.ts";


const { Client } = pkg
const myClient = new Client({ leagueId: 40736849 })
myClient.setCookies({
  espnS2: 'AEBNiyj2iDnjuTXVAfbzp1pJYeiACmmgU6Wq7sVi%2FR6PadoeiBqbyO1DH59pPiFrj2j46fyrAz6QglTFRfdv6UdBcilVsEz7qoLmze5cFbAyZzlbf0DnO2j1WBEUnvsKegjCpZwn93Epo0eIuwaXD108Q5mCzmRFjAsMLlAaRhTEvVsq7NOiRQUje7vatEUkn1t5OtKkwpAJSRao1Hp5ngbbM%2Flb1%2F3cKaozUeJ%2BSuJ5q9CBCSbb7j3vBvmxk2jX8I2KUv5jGorqKgBVi6LtJbOKMuPo4XBH3gB%2BdEoMiKhnHOB%2FYHshQA67slLdfDvyN%2BE%3D',
  SWID: '{A393ED4A-3AB9-47FF-8EDB-747983FB025A}'
})


const port = 8000;
const app = new Application();

const router = new Router()

router.get('/results/freedomStandings',  (ctx) => {
    ctx.response.body = 'FREEDOM LEAGUE STANDINGS'
}).get('/results/teamLeaderboard/:week', async (ctx) => {
  console.log('WE IN THE CONTROLLER')
  const result = await getTeamInformation()
    const { week } = helpers.getQuery(ctx, { mergeParams: true })
    ctx.response.body = `TEAM LEADERBOARD for ${week}`
})

app.use(
  oakCors({
    origin: "http://localhost:3000"
  })
)

app.use(router.routes())
app.use(router.allowedMethods())

  /*
  const logging = async (ctx: Context, next: Function) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
};

app.use(logging);
  */

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });