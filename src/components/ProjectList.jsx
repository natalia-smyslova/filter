// Изображения самих проектов отображаются компонентом без состояния ProjectList, 
// которому от Portfolio мы передаём список проектов — в свойство projects. 
// Отображение проектов — это единственная ответственность компонента ProjectList.
import PropTypes from 'prop-types';

function ProjectList(props) {
    const { projects} = props;

    return (
        <ul className='projectlist'>
          {projects.map((project, index) => {
            return <li className='projectlist__item' key={index}>
              <img src={project.img} alt={project.category} />
            </li>
          })}
        </ul>
      )
    }

ProjectList.propTypes = {
    projects: PropTypes.array
}

export default ProjectList;