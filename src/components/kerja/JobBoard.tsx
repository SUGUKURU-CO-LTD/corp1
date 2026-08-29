"use client";

import { useMemo, useState } from "react";
import { getKerjaFacets } from "@/lib/kerja/jobs";
import type { JapaneseLevel, KerjaJob, VisaTag } from "@/lib/kerja/types";
import FilterBar from "./FilterBar";
import JobCard from "./JobCard";
import JobDetailSheet from "./JobDetailSheet";
import VisaPicker from "./VisaPicker";

type JobBoardProps = {
  jobs: KerjaJob[];
};

export default function JobBoard({ jobs }: JobBoardProps) {
  const [activeVisaTags, setActiveVisaTags] = useState<VisaTag[]>([]);
  const [otherStatusSelected, setOtherStatusSelected] = useState(false);
  const [activePrefecture, setActivePrefecture] = useState<string | null>(null);
  const [activeJapaneseLevel, setActiveJapaneseLevel] = useState<JapaneseLevel | null>(null);
  const [minSalary, setMinSalary] = useState(0);
  const [inexperiencedOnly, setInexperiencedOnly] = useState(false);
  const [selectedJob, setSelectedJob] = useState<KerjaJob | null>(null);

  const facets = useMemo(() => getKerjaFacets(jobs), [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (activeVisaTags.length > 0 && !activeVisaTags.some((tag) => job.visaTags.includes(tag))) {
        return false;
      }
      if (activePrefecture && !job.prefectures.includes(activePrefecture)) return false;
      if (activeJapaneseLevel && job.japaneseLevel !== activeJapaneseLevel) return false;
      if (job.annualSalaryMax < minSalary) return false;
      if (inexperiencedOnly && !job.inexperiencedOk) return false;
      return true;
    });
  }, [jobs, activeVisaTags, activePrefecture, activeJapaneseLevel, minSalary, inexperiencedOnly]);

  const toggleVisaTag = (tag: VisaTag) => {
    setOtherStatusSelected(false);
    setActiveVisaTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const selectOtherStatus = () => {
    setActiveVisaTags([]);
    setOtherStatusSelected((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-accent to-accent-dark px-4 pb-8 pt-2">
        <div className="mx-auto max-w-6xl">
          <VisaPicker
            activeTags={activeVisaTags}
            onToggle={toggleVisaTag}
            otherStatusSelected={otherStatusSelected}
            onSelectOtherStatus={selectOtherStatus}
          />
        </div>
      </div>

      <FilterBar
        prefectures={facets.prefectures}
        activePrefecture={activePrefecture}
        onSelectPrefecture={setActivePrefecture}
        activeJapaneseLevel={activeJapaneseLevel}
        onSelectJapaneseLevel={setActiveJapaneseLevel}
        minSalary={minSalary}
        onSelectMinSalary={setMinSalary}
        inexperiencedOnly={inexperiencedOnly}
        onToggleInexperiencedOnly={() => setInexperiencedOnly((prev) => !prev)}
      />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="mb-4 text-sm text-ink-muted">
          Menampilkan <strong className="text-accent">{filteredJobs.length}</strong> dari {facets.total} lowongan
        </p>

        {filteredJobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line px-6 py-16 text-center text-ink-muted">
            Tidak ada lowongan yang cocok. Coba ubah filter, atau hubungi kami langsung.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onOpen={setSelectedJob} />
            ))}
          </div>
        )}
      </div>

      <JobDetailSheet job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
