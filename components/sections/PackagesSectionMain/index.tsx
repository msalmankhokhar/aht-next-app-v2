import { getPackages } from '@/actions/packages.actions';
import PackagesClientSectionMain from './Client';

export default async function PackagesSectionMain() {
  const initialPackages = await getPackages({limit: 6});
  // console.log(initialPackages);

  return <PackagesClientSectionMain packages={initialPackages.data?.packages || []} />;
}
