import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Some pictures of International University Dormitory',
    paragraph: 'Built in 2021, we are proud to bring the best safe, modern dormitories for students.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{color: '#f44336'}}/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Inside a dorm room
                  </div>
                <h3 className="mt-0 mb-12" style={{color: '#00695c'}}>
                Airy, modern space
                  </h3>
                <p className="m-0" style={{color: '#e91e63'}}>
                  The size of each room ranges from 50 to 150 square meters, harmonious layout, friendly with modern facilities.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://www.rmit.edu.au/content/dam/rmit/vn/en/assets-for-production/images/rmit-sgs-campus-facilities/sgs-campus-accommodation/sgs-accomodation-01.jpg'
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Common room in the dormitory
                  </div>
                <h3 className="mt-0 mb-12" style={{color: '#00695c'}}>
                  Promote the spirit of learning, especially teamwork                  </h3>
                <p className="m-0" style={{color: '#e91e63'}}>
                  We have the motto of motivating students is "better self-study", so the living environment is designed for self-study.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://images.adsttc.com/media/images/573a/95ad/e58e/ce1d/ec00/00ef/newsletter/_DMS9972.jpg?1463457157'
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                a corner outside the dormitory
                  </div>
                <h3 className="mt-0 mb-12" style={{color: '#00695c'}}>
                Safety first
                  </h3>
                <p className="m-0" style={{color: '#e91e63'}}>
                Above all, ensuring the safety of our students is what we care about above all else. With a professional security team, a modern fire protection system, and a strict access system, we confidently say that you are safe in the dormitory.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='http://farm4.staticflickr.com/3665/9507874494_e2312e080c_o.jpg'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;