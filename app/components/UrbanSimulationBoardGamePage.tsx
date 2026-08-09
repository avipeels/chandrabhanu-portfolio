import Image from 'next/image';
import { CaseStudyBackLink, CaseStudyImage, CaseStudyNavigation, CaseStudySectionHeading } from './CaseStudyComponents';
import { urbanSimulationImages } from './urban-simulation-data';

const takeaways = [
  'The role-playing, discussions, and debates make the game interesting and realistic. They build empathy for the various actors of the city and a clearer understanding of how decisions are made.',
  'Games require both strategy and tactics. The game helps distinguish a city-making strategy from the practical tactics used to achieve it.',
  'Master-planning is often linear, while cities continually change through internal and external factors. The game makes this cyclical nature visible.',
  'Favours and event cards introduce luck and unpredictability, factors that are otherwise difficult to address while master-planning.',
  'Players work against and with one another depending on the situation, helping them understand teamwork and participation in planning and design.',
  'The game remains an abstract model. A more realistic implementation would need richer data, potentially supported by a digital platform.',
  'The game raises awareness of cities, their interconnected systems, and their effects on people of different ages and backgrounds.',
  'More layers and complexities could be introduced through different game levels or versions.',
] as const;

export default function UrbanSimulationBoardGamePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="relative aspect-[1728/449] w-full overflow-hidden bg-neutral-100 shadow-[0_7px_20px_rgba(0,0,0,0.14)]">
          <Image src={urbanSimulationImages.hero.src} alt={urbanSimulationImages.hero.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <CaseStudyBackLink />
                <h1 className="font-montserrat text-lg font-bold uppercase underline decoration-1 underline-offset-4 sm:text-xl lg:text-2xl">Urban Simulation Board Game</h1>
                <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Board Game Design | System Thinking | User Testing</p>
              </div>
              <CaseStudyNavigation className="shrink-0" />
            </div>
            <p className="mt-10 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">Cities are highly dynamic entities, existing in a constant state of flux and growth. They function as complex urban ecosystems rather than static master plans. They are a system of systems, and this cannot be represented or studied through drawings and maps alone. To address these complexities and create a methodology that integrates every factor, a board game format was developed. Historically, board games were invented to simulate real scenarios and serve as platforms for strategic development.</p>
          </header>

          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            <section aria-labelledby="competitive-analysis-title" className="pt-2">
              <CaseStudySectionHeading id="competitive-analysis-title" size="large">Competitive analysis</CaseStudySectionHeading>
              <p className="mt-5 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">There have been numerous precedents for urban simulation games, with SimCity remaining the most iconic example. Launched in 1989, it pioneered the application of systems thinking to urban environments, requiring players to balance interconnected variables such as transportation, housing, and ecological health.</p>
              <div className="mt-7 grid items-center justify-items-center gap-7 sm:gap-8 lg:grid-cols-2">
                <CaseStudyImage image={urbanSimulationImages.simCityScreens} className="mx-auto max-w-[590px]" sizes="(max-width: 1023px) 100vw, 590px" />
                <CaseStudyImage image={urbanSimulationImages.gameComparison} className="mx-auto max-w-[590px]" sizes="(max-width: 1023px) 100vw, 590px" />
              </div>
            </section>

            <section aria-labelledby="user-flow-title" className="pt-2">
              <CaseStudySectionHeading id="user-flow-title" size="large">User flow of the game</CaseStudySectionHeading>
              <CaseStudyImage image={urbanSimulationImages.userFlow} className="mx-auto mt-7 max-w-[824px]" sizes="(max-width: 639px) 100vw, 824px" />
            </section>

            <section aria-labelledby="personas-title" className="pt-2">
              <CaseStudySectionHeading id="personas-title" size="large">User personas of the game</CaseStudySectionHeading>
              <div className="mt-7 grid gap-7 sm:gap-10 lg:grid-cols-2 lg:items-center">
                <CaseStudyImage image={urbanSimulationImages.personas} className="mx-auto max-w-[610px]" sizes="(max-width: 1023px) 100vw, 610px" />
                <CaseStudyImage image={urbanSimulationImages.gameLoop} className="mx-auto max-w-[610px]" sizes="(max-width: 1023px) 100vw, 610px" />
              </div>
            </section>

            <section aria-label="Game negotiation model" className="pt-2">
              <CaseStudyImage image={urbanSimulationImages.negotiation} className="mx-auto max-w-[1115px]" sizes="(max-width: 639px) 100vw, 1115px" />
            </section>

            <section aria-labelledby="quality-index-title" className="pt-2">
              <CaseStudySectionHeading id="quality-index-title" size="large">Urban quality index</CaseStudySectionHeading>
              <div className="mt-5 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
                <p className="text-xs leading-[1.45] sm:text-sm">When designing a game, the most important question is: what is the player&apos;s goal? Usually, it&apos;s about money, power, or land—goals that are purely individual. This game takes a different approach by focusing on a much larger objective: the Urban Quality Index (UQI). It explores how the personal goals of different people in a city can actually help everyone reach that collective success.</p>
                <CaseStudyImage image={urbanSimulationImages.urbanQualityIndex} sizes="(max-width: 1023px) 100vw, 700px" />
              </div>
            </section>

            <section aria-labelledby="components-title" className="pt-2">
              <CaseStudySectionHeading id="components-title" size="large">Game components</CaseStudySectionHeading>
              <div className="mt-7 space-y-8 sm:space-y-12">
                <div><h3 className="text-sm font-bold sm:text-base">1. Player Cards</h3><CaseStudyImage image={urbanSimulationImages.playerCards} className="mt-5" /></div>
                <div><h3 className="text-sm font-bold sm:text-base">2. Project Cards</h3><CaseStudyImage image={urbanSimulationImages.projectCards} className="mt-5" /></div>
              </div>
            </section>

            <section aria-label="Additional game components" className="pt-2">
              <h3 className="text-sm font-bold sm:text-base">3. Event Cards</h3>
              <div className="mt-5 grid gap-7 sm:grid-cols-2 sm:gap-8">
                <CaseStudyImage image={urbanSimulationImages.eventCards} sizes="(max-width: 639px) 100vw, 46vw" />
                <CaseStudyImage image={urbanSimulationImages.qualityChart} sizes="(max-width: 639px) 100vw, 46vw" />
              </div>
              <h3 className="mt-8 text-sm font-bold sm:mt-12 sm:text-base">4. Urban Quality Chart</h3>
              <CaseStudyImage image={urbanSimulationImages.gameBoardNotes} className="mx-auto mt-5 max-w-[931px]" sizes="(max-width: 639px) 100vw, 931px" />
            </section>

            <section aria-labelledby="game-board-title" className="pt-2">
              <h3 id="game-board-title" className="text-sm font-bold sm:text-base">5. Game board</h3>
              <p className="mt-5 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">The game board utilizes an abstracted land-use map to represent the city&apos;s zoning. The map has been simplified to display how the city is organized. The color coding and zones remain identical to an actual city land-use map. These zones include Residential, Commercial, Industrial, Public, Defense, Utilities, Parks, Transport, Forest, Water, Agriculture, Railways, and Roads. Another feature of the game is site value, which constantly changes based on many factors.</p>
              <div className="mt-7 grid items-start gap-7 sm:grid-cols-[1.83fr_1fr] sm:gap-8">
                <CaseStudyImage image={urbanSimulationImages.gameBoard} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 60vw, 780px" />
                <CaseStudyImage image={urbanSimulationImages.gameBoardDetail} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 32vw, 420px" />
              </div>
            </section>

            <section aria-labelledby="testing-title" className="pt-2">
              <CaseStudySectionHeading id="testing-title" size="large">User testing</CaseStudySectionHeading>
              <CaseStudyImage image={urbanSimulationImages.userTesting} className="mx-auto mt-7 max-w-[1172px]" sizes="(max-width: 639px) 100vw, 1172px" />
            </section>

            <section aria-labelledby="takeaways-title" className="pt-2">
              <CaseStudySectionHeading id="takeaways-title" size="large">Takeaways</CaseStudySectionHeading>
              <ol className="mt-5 list-decimal space-y-1 pl-5 text-xs leading-[1.45] sm:pl-6 sm:text-sm">{takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ol>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
