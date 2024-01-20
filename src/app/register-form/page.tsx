"use client";

import React from 'react';
import OnboardingForm from '../components/form/onboardingForm';
import { doctorOnBoardingQuestions, patientOnboardinguestions } from '@/app/constants';
import { RoleType } from '@/lib/enums';
import { useSearchParams } from 'next/navigation';

// Replace with your actual Typeform ID
const typeformId = 'XzVE97un';

function MentalHealthForm() {
  const params = useSearchParams()
  console.log(params.get('role'))
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <OnboardingForm onboardingQuestions={params.role === RoleType.doctor ? doctorOnBoardingQuestions : patientOnboardinguestions} />
    </div>
  );
}

export default MentalHealthForm;