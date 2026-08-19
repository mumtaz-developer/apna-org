"use client";

const MembershipPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const result = await response.json();
      if (result.status === "success") {
        alert("Form successfully submit ho gaya hai!");
        e.target.reset();
      } else {
        // Yahan ab Apps Script wala exact message show hoga (e.g. "Yeh member pehle se registered hai!")
        alert(result.message || "Mahr sahib ! koi ghalti kar rhy ho, dobara try kro ");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <section className="min-h-[520px] relative overflow-hidden text-white bg-[#102238]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(201,139,93,.22),transparent_35%)]" />
        <div className="relative z-[2] max-w-[1250px] mx-auto pt-[180px] px-6 pb-[90px]">
          <div className="flex items-center gap-[11px] text-[#a7352d] text-[10px] font-bold tracking-[.18em] uppercase mb-[25px]">
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />
            Membership Form
          </div>
          <h1 className="max-w-[1000px] font-serif text-[clamp(42px,6vw,82px)] leading-[.92] tracking-[-.035em] m-0">
            All Pakistan Noonari Association<br />
            <em className="text-[#cf9062] font-normal text-[0.8em]">(APNA) Membership Form</em>
          </h1>
          <p className="max-w-[670px] text-[rgba(255,255,255,.63)] text-[14px] leading-[1.8] mt-[34px]">
            Please fill out the form below to register your membership with the All Pakistan Noonari Association.
          </p>
        </div>
      </section>

      <section className="py-[100px] px-[clamp(24px,7vw,110px)] bg-[#f1ebdf]">
        <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto p-[50px] bg-white border border-[rgba(16,32,53,.15)] text-left">
          
          <div className="mb-8 pb-4 border-b border-[rgba(16,32,53,.15)] flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-xl font-bold text-[#102238]">Membership Details</h2>
            <div className="flex gap-4 items-center">
              <label htmlFor="province" className="text-[11px] font-bold uppercase text-[#616b74]">Select Province:</label>
              <select 
                id="province" 
                name="province" 
                required 
                className="border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-2 text-[#102035]"
              >
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Azad Jammu & Kashmir">Azad Jammu & Kashmir</option>
                <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[22px] max-sm:grid-cols-1">
            <div className="grid gap-[8px]">
              <label htmlFor="name" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Full Name</label>
              <input id="name" name="name" required className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="father" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Father / Guardian Name</label>
              <input id="father" name="father" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="cnic" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">CNIC Number</label>
              <input id="cnic" name="cnic" required placeholder="xxxxx-xxxxxxx-x" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="dob" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Date of Birth</label>
              <input id="dob" name="dob" type="date" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="bloodGroup" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Blood Group</label>
              <input id="bloodGroup" name="bloodGroup" placeholder="e.g. A+" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="education" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Education</label>
              <input id="education" name="education" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="profession" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Profession</label>
              <input id="profession" name="profession" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="gender" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Gender</label>
              <input id="gender" name="gender" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="phone" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Phone Number</label>
              <input id="phone" name="phone" type="tel" required className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="whatsapp" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">WhatsApp Number</label>
              <input id="whatsapp" name="whatsapp" type="tel" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="email" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Email Address</label>
              <input id="email" name="email" type="email" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="facebook" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Facebook Profile</label>
              <input id="facebook" name="facebook" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="tehsil" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Tehsil</label>
              <input id="tehsil" name="tehsil" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="district" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">District</label>
              <input id="district" name="district" required className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="policeStation" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Police Station</label>
              <input id="policeStation" name="policeStation" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="address" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Address</label>
              <input id="address" name="address" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="provincialConstituency" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">Provincial Constituency (PP)</label>
              <input id="provincialConstituency" name="provincialConstituency" placeholder="e.g. PP-123" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
            <div className="grid gap-[8px]">
              <label htmlFor="nationalConstituency" className="text-[11px] font-bold tracking-[.14em] uppercase text-[#616b74]">National Constituency (NA)</label>
              <input id="nationalConstituency" name="nationalConstituency" placeholder="e.g. NA-45" className="w-full border border-[rgba(16,32,53,.15)] bg-[#fbfaf6] p-[14px] text-[#102035]" />
            </div>
          </div>

          <div className="mt-8 p-8 bg-[#fbfaf6] border border-[rgba(16,32,53,.15)] text-[#102035]" dir="rtl">
            <h3 className="font-bold text-lg mb-4 text-[#a7352d] font-serif">حلف نامہ / شرائط (Oath & Conditions)</h3>
            <div className="space-y-4 text-[15px] leading-[2.2] font-medium font-sans">
              <p className="text-right">
                <span className="font-bold inline-block ml-2">1.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ حضرت محمد ﷺ کو خاتم النبیین (آخری نبی) مانتے ہوئے اپنے ملک کی تعمیر و ترقی اور اس کی حفاظت کے لیے کسی بھی قربانی سے دریغ نہیں کروں گا۔/کروں گی</span>
              </p>
              <p className="text-right">
                <span className="font-bold inline-block ml-2">2.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ آل پاکستان نوناری ایسوسی ایشن (APNA) کے تمام قواعد و ضوابط کی مکمل پابندی کروں گا۔/کروں گی</span>
              </p>
              <p className="text-right">
                <span className="font-bold inline-block ml-2">3.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ APNA کے مقاصد کے لیے اپنی بھرپور صلاحیتوں کے مطابق مخلصانہ خدمات سرانجام دوں گا۔/دوں گی</span>
              </p>
              <p className="text-right">
                <span className="font-bold inline-block ml-2">4.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ APNA کا حصہ رہتے ہوئے اس پلیٹ فارم کو اپنے ذاتی یا سیاسی مقاصد کے لیے ہرگز استعمال نہیں کروں گا/کروں گی اور نہ ہی کسی قسم کی مذہبی یا علاقائی منافرت کو ہوا دوں گا۔/دوں گی</span>
              </p>
              <p className="text-right">
                <span className="font-bold inline-block ml-2">5.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ APNA کے ایک فعال ممبر کی حیثیت سے اپنی برادری کے اتحاد، اتفاق اور باہمی یکجہتی کے لیے ہمیشہ کوشاں رہوں گا۔/رہوں گی</span>
              </p>
              <p className="text-right">
                <span className="font-bold inline-block ml-2">6.</span>
                <span>میں حلفاً اقرار کرتا/کرتی ہوں کہ APNA کے ممبر کی حیثیت سے معاشرے میں موجود دیگر تمام اقوام کے ساتھ اچھے اور پرامن روابط قائم رکھ کر اپنی برادری کا ایک مثبت تاثر اجاگر کرنے کے لیے جدوجہد کرتا/کرتی رہوں گا/رہوں گی</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center pt-4 border-t border-[rgba(16,32,53,.15)] flex-wrap gap-4">
            <button className="min-h-[52px] px-[28px] inline-flex justify-center items-center text-[13px] font-bold bg-[#a7352d] border-0 text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5" type="submit">
              Submit Membership Form
            </button>
            <div className="text-right">
              <span className="block text-[12px] font-bold text-[#616b74]">Authorized Signature / Member Signature</span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default MembershipPage;