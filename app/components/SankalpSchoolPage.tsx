import { CaseStudyBackLink, CaseStudyImage, CaseStudyNavigation, CaseStudySectionHeading } from './CaseStudyComponents';
import {
  sankalpDesignChallenges,
  sankalpDesignCriteria,
  sankalpDesignGoals,
  sankalpFinalProposalImages,
  sankalpHeaderBanner,
  sankalpInitialSketches,
  sankalpInquiryNotes,
  sankalpInterviewInsights,
  sankalpOverallDesignObjective,
  sankalpUserProfileAnalysis,
} from './sankalp-data';

export default function SankalpSchoolPage() {
  const finalPlan = sankalpFinalProposalImages[0];
  const classroomViews = sankalpFinalProposalImages.slice(1, 3);
  const learningEnvironmentViews = sankalpFinalProposalImages.slice(3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white pb-4 sm:pb-6 lg:pb-8">
        <CaseStudyImage image={sankalpHeaderBanner} priority sizes="100vw" frame="none" />

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <CaseStudyBackLink />
                  <h1 className="font-montserrat text-lg font-bold uppercase underline decoration-1 underline-offset-4 sm:text-xl lg:text-2xl">Sankalp: The Open School and Learning Centre</h1>
                  <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Professional project | User-centred design | Adaptive Reuse | Benny Kuriakose and Associates</p>
                </div>
              </div>
              <CaseStudyNavigation className="shrink-0 2xl:absolute 2xl:right-[-200px] 2xl:top-0" />
            </div>
            <p className="mt-10 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">Sankalp is a registered trust started in 1999. The trust is currently managed by 3 directors and 7 trustees. The trust majorly caters to children suffering from Autism Spectrum Disorder (ASD) and Specific Learning Disabilities (SLD). I worked in the beginning phase of the project and was responsible for the design research and the design concept.</p>
          </header>

          <section aria-labelledby="sankalp-investigation-title" className="pt-14 sm:pt-20 lg:pt-24">
            <CaseStudySectionHeading id="sankalp-investigation-title">Initial enquiry and investigation</CaseStudySectionHeading>
            <div className="mt-7 grid w-full gap-6 lg:grid-cols-3">
              {sankalpInquiryNotes.map((note) => (
                <div key={note} className="sticky-note relative flex h-[176px] w-full max-w-none items-center justify-center overflow-hidden bg-[#fff229] px-6 pr-[4.75rem] text-center font-handwriting text-base leading-[1.2] sm:px-8 sm:pr-20 sm:text-lg">
                  <span className="sticky-note-fold absolute right-0 top-0 z-20 size-[72px] bg-white" aria-hidden="true" />
                  <span className="sticky-note-fold-inner absolute right-[6px] top-[6px] z-20 size-[60px] bg-[#fff229]" aria-hidden="true" />
                  <span className="relative z-10 max-w-[260px]">{note}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">To build a deep understanding of our users, initial secondary research was conducted and presented to the trustees for feedback. This was followed by a series of site visits to observe and interview school staff and students in their environment. Below is a summary of the insights gathered from these observations and interviews.</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {sankalpInterviewInsights.map((insight) => (
                <article key={insight.question} className="overflow-hidden rounded-t-xl border border-black/35 bg-white font-handwriting shadow-sm">
                  <h3 className="flex min-h-20 items-center bg-[#d8d8d8] px-3 py-3 text-sm font-semibold leading-[1.15]">Q: {insight.question}</h3>
                  <p className="px-3 py-4 text-sm leading-[1.22]">
                    A: {insight.answer.map((segment, index) => 'highlight' in segment && segment.highlight ? <mark key={`${segment.text}-${index}`} className="bg-[#fff229] px-0.5">{segment.text}</mark> : segment.text)}
                  </p>
                </article>
              ))}
            </div>

            <div className="pt-14 sm:pt-20 lg:pt-24">
              <CaseStudySectionHeading id="sankalp-user-profile-title">User profile analysis</CaseStudySectionHeading>
              <CaseStudyImage image={sankalpUserProfileAnalysis} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" frame="none" />
            </div>
          </section>

          <section aria-labelledby="sankalp-objective-title" className="pt-14 sm:pt-20 lg:pt-24">
            <CaseStudySectionHeading id="sankalp-objective-title">Overall design objective</CaseStudySectionHeading>
            <CaseStudyImage image={sankalpOverallDesignObjective} sizes="(max-width: 767px) 100vw, 900px" className="mx-auto mt-8 max-w-[906px]" frame="none" />

            <div className="pt-14 sm:pt-20">
              <CaseStudySectionHeading id="sankalp-design-goals-title">Design goals</CaseStudySectionHeading>
              <CaseStudyImage image={sankalpDesignGoals} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" frame="none" />
            </div>
          </section>

          <section aria-labelledby="sankalp-criteria-title" className="pt-14 sm:pt-20 lg:pt-24">
            <CaseStudySectionHeading id="sankalp-criteria-title">Design criteria</CaseStudySectionHeading>
            <CaseStudyImage image={sankalpDesignCriteria} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" frame="none" />

            <div className="pt-14 sm:pt-20">
              <CaseStudySectionHeading id="sankalp-challenge-title">Design challenge</CaseStudySectionHeading>
              <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">Another major challenge was that the project involved adaptive reuse, requiring the conversion of an old orphanage into an open school for students on the autism spectrum and those with specific learning disabilities. To achieve this, a thorough building audit was conducted to determine how best to utilize the existing structure, what modifications were needed to meet school building standards, and how to minimize overall construction costs.</p>
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {sankalpDesignChallenges.map((image) => (
                  <CaseStudyImage
                    key={image.src}
                    image={image}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]"
                    frame="none"
                  />
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="sankalp-sketches-title" className="pt-14 sm:pt-20 lg:pt-24">
            <CaseStudySectionHeading id="sankalp-sketches-title">Initial sketches and ideas</CaseStudySectionHeading>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.04fr_1fr_1.69fr] lg:gap-10">
              {sankalpInitialSketches.map((image) => <CaseStudyImage key={image.src} image={image} sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 25vw, 33vw" className="rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]" frame="none" />)}
            </div>
          </section>

          <section aria-labelledby="sankalp-final-title" className="pt-14 sm:pt-20 lg:pt-24">
            <CaseStudySectionHeading id="sankalp-final-title">Final proposal</CaseStudySectionHeading>
            <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">The final proposal synthesizes the extensive research and discussions held with teachers and trustees. Understanding their unique teaching pedagogy and specialized activities—such as speech and art therapy—was essential to designing a cohesive classroom layout. Furthermore, because the progression of grade levels differs significantly from conventional schools, the design adapts to this unique flow. The existing layout is optimized by incorporating dedicated niche or “escape” spaces, allowing students to retreat and self-regulate at will.</p>

            <CaseStudyImage image={finalPlan} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8 rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]" frame="none" />

            <div className="mx-auto mt-10 grid max-w-[950px] gap-6 md:items-end md:grid-cols-2 lg:gap-8">
              {classroomViews.map((image) => <CaseStudyImage key={image.src} image={image} sizes="(max-width: 767px) 100vw, 50vw" className="rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]" frame="none" />)}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
              {learningEnvironmentViews.map((image) => <CaseStudyImage key={image.src} image={image} sizes="(max-width: 767px) 100vw, 50vw" className="rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]" frame="none" />)}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
