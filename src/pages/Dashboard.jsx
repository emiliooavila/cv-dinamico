import { useCV } from '../context/CVContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const { cvData } = useCV();
  const { skills } = cvData;

  const getChartData = () => {
    const categoryCounts = skills.reduce((acc, skill) => {
      const existingCategory = acc.find(item => item.name === skill.category);
      if (existingCategory) {
        existingCategory.cantidad += 1;
      } else {
        acc.push({ name: skill.category, cantidad: 1 });
      }
      return acc;
    }, []);
    return categoryCounts;
  };

  const chartData = getChartData();

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Dashboard de Habilidades</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Resumen visual de tus áreas de conocimiento.
      </p>

      {skills.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#333', borderRadius: '8px' }}>
          <p style={{ color: 'white' }}>Aún no hay habilidades registradas para generar la gráfica.</p>
        </div>
      ) : (
        <div style={{ height: '400px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#000', textAlign: 'center', marginBottom: '20px' }}>
            Habilidades por Categoría
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#000" />
              <YAxis allowDecimals={false} stroke="#000" />
              <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ color: '#000' }} />
              <Bar dataKey="cantidad" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ padding: '20px', backgroundColor: '#242424', border: '1px solid #444', borderRadius: '8px', minWidth: '200px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#8884d8' }}>Total Registradas</h3>
          <p style={{ fontSize: '2rem', margin: '0', fontWeight: 'bold' }}>{skills.length}</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#242424', border: '1px solid #444', borderRadius: '8px', minWidth: '200px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#82ca9d' }}>Categorías Diferentes</h3>
          <p style={{ fontSize: '2rem', margin: '0', fontWeight: 'bold' }}>{chartData.length}</p>
        </div>
      </div>
    </div>
  );
}