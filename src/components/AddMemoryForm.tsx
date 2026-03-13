import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Upload } from "lucide-react";
import { Memory } from "@/data/memories";

interface AddMemoryFormProps {
  onAdd: (memory: Memory) => void;
}

const AddMemoryForm = ({ onAdd }: AddMemoryFormProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    song_name: "",
    artist: "",
    romantic_phrase: "",
    description: "",
    date: "",
    spotify_link: "",
    photo: "",
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((f) => ({ ...f, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const memory: Memory = {
      id: Date.now().toString(),
      ...form,
    };
    onAdd(memory);
    setForm({
      title: "",
      song_name: "",
      artist: "",
      romantic_phrase: "",
      description: "",
      date: "",
      spotify_link: "",
      photo: "",
    });
    setOpen(false);
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all";

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow-primary"
      >
        <Plus className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.form
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto space-y-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-display font-bold text-foreground">
                  Nova Memória
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Photo upload */}
              <label className="flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed border-border hover:border-primary/40 cursor-pointer transition-colors bg-secondary/30">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Upload className="w-6 h-6" />
                    <span className="text-sm">Carregar foto</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>

              <input
                className={inputClass}
                placeholder="Nome do momento"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  className={inputClass}
                  placeholder="Nome da música"
                  value={form.song_name}
                  onChange={(e) => setForm((f) => ({ ...f, song_name: e.target.value }))}
                />
                <input
                  className={inputClass}
                  placeholder="Artista"
                  value={form.artist}
                  onChange={(e) => setForm((f) => ({ ...f, artist: e.target.value }))}
                />
              </div>
              <input
                className={inputClass}
                placeholder="Frase romântica"
                value={form.romantic_phrase}
                onChange={(e) =>
                  setForm((f) => ({ ...f, romantic_phrase: e.target.value }))
                }
              />
              <textarea
                className={`${inputClass} min-h-[80px] resize-none`}
                placeholder="Conte esse momento..."
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className={inputClass}
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  required
                />
                <input
                  className={inputClass}
                  placeholder="Link Spotify"
                  value={form.spotify_link}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, spotify_link: e.target.value }))
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-sm hover:opacity-90 transition-opacity"
              >
                Salvar Memória 💕
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddMemoryForm;
