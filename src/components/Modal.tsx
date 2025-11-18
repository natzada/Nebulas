interface ModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function Modal({ open, onCancel, onConfirm }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white border-6 border-[#cecece] rounded-4xl shadow-lg p-6 w-[90%] max-w-sm text-center">

        <h2 className="text-xl font-bold mb-6">
          Deseja sair da sua conta?
        </h2>

        <div className="flex gap-3 justify-center">
          <button
            className="px-6 py-2 rounded-full font-bold bg-greenF text-white hover:bg-greenF/80 transition hover:cursor-pointer"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            className="px-6 py-2 rounded-full font-bold bg-[#cecece] text-text1 hover:bg-[#cecece]/80 hover:cursor-pointer"
            disabled
            onClick={onConfirm}
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
}
