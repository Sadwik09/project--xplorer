import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

function getStorageKey(userId: string) {
  return `saved-projects:${userId}`;
}

export function useSavedProjects() {
  const { user } = useAuth();
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      setSavedIds([]);
      return;
    }

    const raw = localStorage.getItem(getStorageKey(user.id));
    if (!raw) {
      setSavedIds([]);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as string[];
      setSavedIds(Array.isArray(parsed) ? parsed : []);
    } catch {
      setSavedIds([]);
    }
  }, [user]);

  const persist = (nextIds: string[]) => {
    if (!user) return;
    localStorage.setItem(getStorageKey(user.id), JSON.stringify(nextIds));
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const toggleSaved = (id: string) => {
    if (!user) return false;
    const next = isSaved(id) ? savedIds.filter((savedId) => savedId !== id) : [...savedIds, id];
    persist(next);
    setSavedIds(next);
    return !isSaved(id);
  };

  return { savedIds, isSaved, toggleSaved, canSave: Boolean(user) };
}
