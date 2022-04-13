import "@testing-library/jest-dom/extend-expect"
import { StaticQuery, useStaticQuery } from 'gatsby'

// import skills from './__fixtures__/skills.json'
// import projects from './__fixtures__/pastProjects.json'

beforeAll(() => {
	// const photoSrc = resume.contentJson.basics.picture.childImageSharp.fixed.src
	const dataMock = {
		// ...skills,
		// ...projects
	  
	//   photoSrc,
	//   portfolioJson: { bugs: '' },
	//   ...projects
	}
  
	// StaticQuery.mockImplementation(({ render }) => render({ ...dataMock }))
	// useStaticQuery.mockImplementation(() => ({ ...dataMock }))
  })