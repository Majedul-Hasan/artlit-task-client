import { Typography } from '@material-tailwind/react';
import React from 'react';

const AboutBook = () => {
  return (
    <section className='my-4'>
      <Typography
        as='h2'
        className='text-xl font-semibold'>
        About this book
      </Typography>
      <div className='flex flex-col gap-3'>
        <Typography
          as={'p'}
          className='text-md font-medium'>
          This textbook explains Technology Roadmapping, in both its development
          and practice, and illustrates the underlying theory of, and empirical
          evidence for, technologic evolution over time afforded by this
          strategy. The book contains a rich set of examples and practical
          exercises from a wide array of domains in applied science and
          engineering such as transportation, energy, communications, and
          medicine. Professor de Weck gives a complete review of the principles,
          methods, and tools of technology management for organizations and
          technologically-enabled systems, including technology scouting,
          roadmapping, strategic planning, R&amp;D project execution,
          intellectual property management, knowledge management, partnering and
          acquisition, technology transfer, innovation management, and financial
          technology valuation. Special topics also covered include Moore’s law,
          S-curves, the singularity and fundamental limits to technology. Ideal
          for university courses in engineering, management, and business
          programs, as well as self-study or online learning for professionals
          in a range of industries, readers of this book will learn how to
          develop and deploy comprehensive technology roadmaps and R&amp;D
          portfolios on diverse topics of their choice.
        </Typography>
        <ul className='text-md font-medium list-disc '>
          <Typography
            as={'li'}
            className='text-md font-medium'>
            Introduces a unique framework, Advanced Technology Roadmap
            Architecture (ATRA), for developing quantitative technology roadmaps
            and competitive R&amp;D portfolios through a lucid and rigorous
            step-by-step approach;
          </Typography>
          <Typography
            as={'li'}
            className='text-md font-medium'>
            Elucidates the ATRA framework through analysis which was validated
            on an actual $1 billion R&amp;D portfolio at Airbus, leveraging a
            pedagogy significantly beyond typical university textbooks and
            problem sets;
          </Typography>
          <Typography
            as={'li'}
            className='text-md font-medium'>
            Reinforces concepts with in-depth case studies, practical exercises,
            examples, and thought experiments interwoven throughout the text;
          </Typography>
          <Typography
            as={'li'}
            className='text-md font-medium'>
            Maximizes reader competence on how to explicitly link strategy,
            finance, and technology.
          </Typography>
        </ul>
        <Typography as='p'>
          The book follows and supports the MIT Professional Education Courses
          “Management of Technology: Roadmapping &amp; Development,”
        </Typography>
        https://professional.mit.edu/course-catalog/management-technology-roadmapping-development
        and “Management of Technology: Strategy &amp; Portfolio Analysis”
        https://professional.mit.edu/course-catalog/management-technology-strategy-portfolio-analysis
      </div>
    </section>
  );
};

export default AboutBook;
