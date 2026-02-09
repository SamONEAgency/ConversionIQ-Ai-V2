import React from 'react';
import { FeatureItem } from './SplitSection';

interface FeatureListProps {
  items: FeatureItem[];
  layout?: 'stacked' | 'grid' | 'centered';
  className?: string;
}

export function FeatureList({
  items,
  layout = 'stacked',
  className,
}: FeatureListProps) {
  if (layout === 'grid') {
    return (
      <div className={className}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-left"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 50)}
              >
                {Icon && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-[#383299]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-heading font-medium text-slate-700 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                )}
                {!Icon && (
                  <>
                    <h3 className="text-base font-heading font-medium text-slate-700 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      {item.body}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (layout === 'centered') {
    return (
      <div className={className}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-4 text-left"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                {Icon && (
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-[#383299]" />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-heading font-medium text-slate-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Stacked layout (default)
  return (
    <div className={className}>
      <div className="space-y-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="space-y-2 text-left"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {Icon && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-[#383299]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              )}
              {!Icon && (
                <>
                  <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {item.body}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

