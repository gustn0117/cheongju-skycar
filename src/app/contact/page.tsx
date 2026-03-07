'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    content: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', content: '', date: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            문의하기
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            청주스카이차에 언제든지 편하게 연락주세요
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white">
                <h2 className="text-3xl font-bold mb-8 text-[#1a2744]">
                  온라인 문의
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✓ 문의가 접수되었습니다. 빠르게 연락드리겠습니다!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-lg font-semibold text-[#1a2744] mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="성함을 입력해주세요"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-lg font-semibold text-[#1a2744] mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>

                  {/* Work Content */}
                  <div>
                    <label className="block text-lg font-semibold text-[#1a2744] mb-2">
                      작업 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      required
                      placeholder="필요한 작업 내용을 상세히 설명해주세요"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Desired Date */}
                  <div>
                    <label className="block text-lg font-semibold text-[#1a2744] mb-2">
                      희망 작업 일자
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#f59e0b] text-[#1a2744] py-4 rounded-lg font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105"
                  >
                    📝 문의 제출
                  </button>
                </form>

                <p className="text-sm text-gray-600 mt-6">
                  📌 제출하신 정보는 상담 목적으로만 사용되며, 개인정보 보호정책에 따라 관리됩니다.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-[#1a2744] to-[#2a3f5f] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">
                  직접 연락하기
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">📞 전화</p>
                    <a
                      href="tel:010-1234-5678"
                      className="text-2xl font-bold text-[#f59e0b] hover:text-[#f97316] transition-colors"
                    >
                      010-1234-5678
                    </a>
                  </div>
                  <div className="border-t border-[#2a3f5f]"></div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">⏰ 상담 시간</p>
                    <p className="text-lg font-semibold">
                      08:00 ~ 17:00
                    </p>
                    <p className="text-gray-400 text-sm">
                      24시간 신속배차 가능
                    </p>
                  </div>
                  <div className="border-t border-[#2a3f5f]"></div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">📍 위치</p>
                    <p className="text-lg font-semibold">
                      충청북도 청주시
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#1a2744]">
                  📦 서비스 지역
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>✓ 청주시 전지역</p>
                  <p>✓ 충청북도 인근</p>
                  <p>✓ 전국 배차 가능</p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#1a2744]">
                  ✨ 특징
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>⚡ 24시간 신속배차</p>
                  <p>🛡️ KC안전인증</p>
                  <p>💰 합리적 가격</p>
                  <p>👨‍🔧 전문 기술자</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            위치
          </h2>
          <div className="bg-gray-300 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-2xl font-bold">📍 충청북도 청주시</p>
              <p className="text-lg mt-2">Google Map 연동 예정</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Q. 야간에도 배차가 가능한가요?
              </h3>
              <p className="text-gray-700">
                A. 네, 24시간 신속배차 서비스를 제공합니다. 긴급 상황에도 빠르게 대응해드립니다.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Q. 기술자 파견이 가능한가요?
              </h3>
              <p className="text-gray-700">
                A. 네, 경험 많은 전문 기술자 파견이 가능합니다. 안전한 작업을 위해 기술자 파견을 권장합니다.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Q. 서비스 지역은 어디까지인가요?
              </h3>
              <p className="text-gray-700">
                A. 청주시 전지역 및 인근 지역입니다. 전국 배차도 가능하니 문의해주세요.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Q. 현장 점검 및 상담이 무료인가요?
              </h3>
              <p className="text-gray-700">
                A. 네, 무료 현장 확인과 상담을 제공합니다. 전화로 문의해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            언제든지 전화 또는 온라인으로 상담받으세요
          </p>
          <a
            href="tel:010-1234-5678"
            className="bg-[#f59e0b] text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105 inline-block"
          >
            ☎️ 010-1234-5678
          </a>
        </div>
      </section>
    </div>
  );
}
