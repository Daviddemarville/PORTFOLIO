import { useEffect, useState } from 'react';

const Counter = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState({
    total: 0,
    year: 0,
    month: 0,
  });

  // Mettre à jour la date et l'heure toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Gérer les compteurs de visite
  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0 = janvier

    // Récupération des compteurs existants
    const storedData = JSON.parse(localStorage.getItem('visitStats') || '{}');

    const newStats = {
      total: storedData.total ? storedData.total + 1 : 1,
      year: storedData.yearYear === currentYear ? storedData.year + 1 : 1,
      month:
        storedData.monthYear === currentYear && storedData.monthIndex === currentMonth
          ? storedData.month + 1
          : 1,
      yearYear: currentYear,
      monthYear: currentYear,
      monthIndex: currentMonth,
    };

    setVisitCount({
      total: newStats.total,
      year: newStats.year,
      month: newStats.month,
    });

    // Sauvegarde dans localStorage
    localStorage.setItem('visitStats', JSON.stringify(newStats));
  }, []);

  // Formatage de la date et l'heure
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateTime);

  const formattedTime = dateTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return { visitCount, formattedDate, formattedTime };
};

export default Counter;
