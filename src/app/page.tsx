import AddCompanyButton from './components/AddCompanyButton';
import MagicButton from './components/MagicButton';
import './globals.css';

export default function Home() {

  return (
    <main>
      <h1 className="text-center text-zinc-500">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
