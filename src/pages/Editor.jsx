import PersonalForm from '../components/PersonalForm';
import SkillForm from '../components/SkillForm';
import ProjectForm from '../components/ProjectForm';
import EducationForm from '../components/EducationForm';
import ExperienceForm from '../components/ExperienceForm';

export default function Editor() {
  return (
    <div>
      <h1>Editor de CV</h1>
      <p>Completa los siguientes formularios para generar tu currículum.</p>
      
      {}
      <PersonalForm />
    </div>
  );
}