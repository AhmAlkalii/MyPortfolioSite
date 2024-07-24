
import uniqid from 'uniqid';
import { skills } from '../helpers/ProjectList';
import './Skills.css';

function Skills() {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {skills.map((category) => (
        <div key={uniqid()} className='skills__category'>
          <h3 className='skills__category-title'>{category.title}</h3>
          <ul className='skills__list'>
            {category.list.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills
