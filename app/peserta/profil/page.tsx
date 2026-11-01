"use client";

import React, { useState } from "react";
import { User, Mail, GraduationCap, Briefcase, Save, Camera, CheckCircle2 } from "lucide-react";

export default function ProfilPesertaPage() {
  const [namaLengkap, setNamaLengkap] = useState("Dwiky Abyantara Murdianto");
  const [email, setEmail] = useState("dwikyabyantara@peserta.nextylab.ac.id");
  const [instansi, setInstansi] = useState("Universitas Muhammadiyah Surakarta");
  const [divisi, setDivisi] = useState("Software Development");
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Profil Saya</h1>
          <p className="text-xs text-zinc-500 mt-1">Kelola informasi data diri dan pengaturan akun magang Anda.</p>
        </div>

        {/* 1. CARD AVATAR & RINGKASAN PROFIL */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group">
            <div className="h-24 w-24 rounded-full bg-orange-500 text-white font-extrabold text-2xl flex items-center justify-center border-4 border-white shadow-md">
              DA
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-zinc-900 hover:bg-orange-600 text-white rounded-full shadow-lg transition-colors">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-lg font-bold text-zinc-900">{namaLengkap}</h2>
            <p className="text-xs text-zinc-500 font-medium">{email}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
              <span className="px-2.5 py-0.5 bg-orange-50 text-orange-600 border border-orange-200 rounded-md text-[10px] font-bold uppercase">
                {divisi}
              </span>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-[10px] font-bold uppercase">
                Aktif Magang
              </span>
            </div>
          </div>
        </div>

        {/* 2. FORM EDIT PROFIL */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-zinc-100 bg-zinc-50/50 flex items-center gap-2">
            <User className="h-4 w-4 text-orange-500" />
            <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Informasi Data Diri</h3>
          </div>

          <form onSubmit={handleSave} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-[10px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    value={namaLengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    className="w-full bg-zinc-50/50 focus:bg-white border border-zinc-200 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-xs font-medium text-zinc-800 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Email Akun
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="email"
                    disabled
                    value={email}
                    className="w-full bg-zinc-100 border border-zinc-200 rounded-xl py-2.5 pl-9 pr-3 text-xs font-medium text-zinc-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Asal Instansi / Universitas
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    className="w-full bg-zinc-50/50 focus:bg-white border border-zinc-200 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-xs font-medium text-zinc-800 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Divisi Penempatan
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    disabled
                    value={divisi}
                    className="w-full bg-zinc-100 border border-zinc-200 rounded-xl py-2.5 pl-9 pr-3 text-xs font-medium text-zinc-500 cursor-not-allowed"
                  />
                </div>
              </div>

            </div>

            <div className="flex justify-end pt-4 border-t border-zinc-100">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-medium border border-zinc-800 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Perubahan profil berhasil disimpan!
        </div>
      )}
    </div>
  );
}