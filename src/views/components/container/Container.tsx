import Loading from '../loading/Loading';

export interface ContainerProps {
  children: React.ReactNode;
  loading?: boolean;
  hasError?: boolean;
  isEmpty?: boolean;
  //   styles?: CSSProperties;
  height?: string;
}

const Container = (props: ContainerProps) => {
  const { isEmpty, loading, hasError, children, height } = props;

  if (loading)
    return (
      <section className={'container mx-auto px-4 text-center '} style={{ minHeight: height ?? '800px' }}>
        <Loading />
      </section>
    );

  if (isEmpty)
    return (
      <section className={'container mx-auto px-4 text-center '} style={{ minHeight: height ?? '800px' }}>
        <img src={require('../../../assets/images/lotties/animation_500_li0j0jmq.gif')} alt='empty' className='text-center' />
      </section>
    );

  if (hasError)
    return (
      <section className={'container mx-auto px-4 '} style={{ minHeight: height ?? '800px' }}>
        <img src={require('../../../assets/images/lotties/animation_500_li0j1uvo.gif')} alt='error' />
      </section>
    );

  return (
    <section className={'container mx-auto px-4 '} style={{ minHeight: height ?? '800px' }}>
      {children}
    </section>
  );
};
export default Container;
