import Grid from './components/Grid';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Spreadsheet App</h1>
      <Grid /> {/* Render the Grid component */}
    </div>
  );
}
