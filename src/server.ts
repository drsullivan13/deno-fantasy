import { Application, helpers, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 8000;
const app = new Application();

const router = new Router()

router.get('/results/freedomStandings', (ctx) => {
    ctx.response.body = 'FREEDOM LEAGUE STANDINGS'
}).get('/results/teamLeaderboard/:week', (ctx) => {
    const { week } = helpers.getQuery(ctx, { mergeParams: true })
    ctx.response.body = `TEAM LEADERBOARD for ${week}`
})

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