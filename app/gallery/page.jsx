'use client';

export default function FormPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#102238] text-white flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-md bg-[#162a45] p-8 rounded-xl border border-white/10 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Simple Form</h1>
        <p className="text-white/60 text-xs sm:text-sm mb-6">Bina Hooks ke</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 text-xs sm:text-sm font-medium text-white/80">Name:</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter name" 
              className="w-full px-4 py-2.5 rounded-lg bg-[#102238] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#cf9062] transition-colors text-sm" 
            />
          </div>
          
          <div>
            <label className="block mb-2 text-xs sm:text-sm font-medium text-white/80">Address:</label>
            <input 
              type="text" 
              name="address" 
              placeholder="Enter address" 
              className="w-full px-4 py-2.5 rounded-lg bg-[#102238] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#cf9062] transition-colors text-sm" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-2 py-3 px-4 bg-[#a7352d] hover:bg-[#b83b32] text-white text-xs sm:text-sm font-bold rounded-lg transition-transform duration-200 hover:-translate-y-[1px] cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}