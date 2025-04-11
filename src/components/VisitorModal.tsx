// src/components/VisitorModal.tsx

type VisitorModalProps = {
  visitCount: {
    total: number;
    year: number;
    month: number;
  };
  closeModal: () => void;
};

const VisitorModal = ({ visitCount, closeModal }: VisitorModalProps) => {
  return (
    <div className="fixed inset-0 bg-zinc-200/80 flex justify-center items-center z-20">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold">Statistiques des Visiteurs</h2>
        <p className="text-sm mt-2">
          Vous êtes le <strong>{visitCount.total}</strong><sup>e</sup> visiteur depuis la publication.
        </p>
        <p className="text-sm">
          Le <strong>{visitCount.year}</strong><sup>e</sup> cette année, et le <strong>{visitCount.month}</strong><sup>e</sup> ce mois-ci.
        </p>
        {/* Bouton pour fermer le modal */}
        <button
          onClick={closeModal}
          className="mt-4 bg-zinc-300 text-zinc-700 px-4 py-2 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default VisitorModal;

