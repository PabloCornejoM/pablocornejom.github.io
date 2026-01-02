// Random background image selector for landing page
document.addEventListener('DOMContentLoaded', () => {
  const landscapeImages = [
    'images/landscapes/04D94A56-AC3E-40EB-B4E8-A744874A0E53_1_102_o.jpeg',
    'images/landscapes/088706FC-2403-4426-ACB9-EC11039EE009_1_105_c.jpeg',
    'images/landscapes/1014E3EA-39DD-431F-83A1-E527F7B82561_1_102_o.jpeg',
    'images/landscapes/10729148-6DBE-4217-9D90-E42C1893FF1C_1_102_o.jpeg',
    'images/landscapes/23F194C7-912B-4FAD-A7D1-BD42BFD7C4CC_1_106_c.jpeg',
    'images/landscapes/27EB766E-615F-401B-AF2F-0CE3A7B6598C_1_201_a.jpeg',
    'images/landscapes/2C8F84C2-A8AD-4D8C-B59A-DA0B7DC389B3_1_102_o.jpeg',
    'images/landscapes/3451C121-8C4C-40AB-B242-E8999FCD969F_1_102_o.jpeg',
    'images/landscapes/466EF45C-493A-4A3B-879F-B4F10F95944F_1_102_o.jpeg',
    'images/landscapes/48837DFC-00EC-4B57-BF1D-1BF2BCF92CDD_1_105_c.jpeg',
    'images/landscapes/49FF2450-32AE-4356-845F-EF8700E2266F.jpeg',
    'images/landscapes/4D7ED8F9-967E-4839-897F-1859E3879DF4_1_102_o.jpeg',
    'images/landscapes/568262D7-4CD8-4505-ACC3-1AAA19266F7E_1_105_c.jpeg',
    'images/landscapes/5BFD2EB4-9E2F-4F8B-9D77-B02D36367328.jpeg',
    'images/landscapes/630848EB-885C-43BD-9932-A9DAFAE46183_1_102_o.jpeg',
    'images/landscapes/772B5929-F37A-4C66-AF0E-8AB5DF4D91FE_1_102_o.jpeg',
    'images/landscapes/77CDED3F-6E75-43F5-90A1-CCA24A877D5C_1_102_o.jpeg',
    'images/landscapes/85DCA698-0FA8-4691-B3E5-CD89A8169352_1_102_o.jpeg',
    'images/landscapes/9048CF93-677B-4B33-BF0C-CAADFAAC2EAE_1_105_c.jpeg',
    'images/landscapes/94C95AB4-417D-442F-A9C0-0AD98D4100DB_1_102_o.jpeg',
    'images/landscapes/A47C3945-9306-47A6-A470-868ACCD8A071_1_106_c.jpeg',
    'images/landscapes/A5D48018-7A7C-4C09-A697-9F63E5070558_1_105_c.jpeg',
    'images/landscapes/A6A4AAA1-03E6-44EF-98C6-B5DEA9643776.jpeg',
    'images/landscapes/A7B6FEA9-DC8A-4C1E-8DB9-D2C002E3B419_1_102_o.jpeg',
    'images/landscapes/AA0A6AEE-EDD1-49A1-8C20-F274F83D2460.jpeg',
    'images/landscapes/B56CA8DC-7094-4985-830F-DB523089058F_1_105_c.jpeg',
    'images/landscapes/BBD3243E-D3C3-4F28-B261-59BC61D7B6B7_1_102_o.jpeg',
    'images/landscapes/C25FEA10-4D1C-4F4D-905B-900113392BB2_1_102_o.jpeg',
    'images/landscapes/D85E7AF7-3BB9-4F9E-A12B-8D3F23F3BBCC_1_102_o.jpeg',
    'images/landscapes/E5CC7E8D-BD7D-4571-8918-CA4E53F24411_1_102_o.jpeg',
    'images/landscapes/EF7D74CC-B3F1-4F73-9E19-FC5F586D625C_1_102_o.jpeg',
    'images/landscapes/F9661D02-085A-46AD-B992-9B99A5E9643A_1_105_c.jpeg',
    'images/landscapes/FA649B9B-FD26-421A-A3D4-AB8505D4D3F9_1_102_o.jpeg',
    'images/landscapes/FF3EC132-0DEE-4056-BF99-A95B42AB8455_1_102_o.jpeg'
  ];

  // Select a random image
  const randomIndex = Math.floor(Math.random() * landscapeImages.length);
  const selectedImage = landscapeImages[randomIndex];

  // Set it as the background
  document.body.style.backgroundImage = `url("${selectedImage}")`;
});
