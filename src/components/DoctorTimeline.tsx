'use client';

import ScrollAnimate from '@/components/ScrollAnimate';

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface DoctorTimelineProps {
  doctorName: string;
  experience: string;
  items: TimelineItem[];
}

export default function DoctorTimeline({ doctorName, experience, items }: DoctorTimelineProps) {
  return (
    <section className="timeline-section">
      <div className="container">
        <ScrollAnimate animation="fadeUp">
          <div className="section-header">
            <div className="section-eyebrow">Journey</div>
            <h2>Experience Timeline</h2>
            <p className="section-desc">A step-by-step look at {doctorName}&apos;s academic and clinical journey.</p>
          </div>
        </ScrollAnimate>

        <div className="timeline-container">
          {items.map((item, index) => (
            <ScrollAnimate key={index} animation="fadeLeft" delay={index * 250}>
              <div className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
