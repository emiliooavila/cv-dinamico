import PersonalForm from '../components/PersonalForm';
import SkillForm from '../components/SkillForm';
import ProjectForm from '../components/ProjectForm';
import EducationForm from '../components/EducationForm';
import ExperienceForm from '../components/ExperienceForm';

export default function Editor() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ 
        fontFamily: 'var(--display)', 
        fontWeight: '800', 
        color: 'var(--accent)', 
        fontSize: '3.5rem', 
        margin: '0 0 15px 0', 
        letterSpacing: '-1px' 
      }}>
        Editor de CV
      </h1>
      <p style={{ 
        color: 'var(--text)', 
        fontSize: '1.1rem', 
        marginBottom: '40px' 
      }}>
        Completa los siguientes formularios para generar tu currículum.
      </p>
      
      <PersonalForm />
      <SkillForm />
      <ProjectForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}