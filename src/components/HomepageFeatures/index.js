import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

console.log(require('@site/static/img/code.png'));

const FeatureList = [
  {
    title: 'Develop easier!',
    Img: require('@site/static/img/code.png').default,
    description: (
      <>
        Whether you want to contribute to a addon, or Aioewa itself, all you will use is HTML, JS, and CSS. It doesn't get simpler!
      </>
    ),
  },
  {
    title: 'Want to contribute to Aioewa',
    Img: require('@site/static/img/addonSettings.png').default,
    description: (
      <>
        If you feel that something is wrong or got has an error, and if you have the fix, don't be stale, send a pull request with the fix to the Pull Request page on <a style={{textDecoration: "underline"}} href="https://github.com/StioStudio/Aioewa/pulls">Aioewa repository</a>.
      </>
    ),
  }
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: "space-around"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
