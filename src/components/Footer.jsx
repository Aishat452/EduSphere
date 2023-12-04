import Link from 'next/link';
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <Link href="/">EduSphere</Link>
        </h1>
        <p className="py-4">
          You may be interested in visiting our social media handles. Do well to
          like our page, follow us and share our content with your loved ones!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.facebook.com/aishatomoadewoyin">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/aishat_adewoyin">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/aishaadewoyin">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://github.com/Aishat452">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://www.youtube.com/c/DigitalIntellectualHub">
            <FaYoutubeSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/analytics">Analytics</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/marketing">Marketing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/commerce">Commerce</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/insights">Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/documentation">Documentation</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/guides">Guides</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/api-status">API Status</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/jobs">Jobs</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/claim">Claim</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/policy">Policy</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
